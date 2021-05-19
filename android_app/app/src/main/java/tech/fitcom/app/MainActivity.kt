package tech.fitcom.app

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.widget.Toast
import androidx.lifecycle.MutableLiveData
import kotlinx.coroutines.*
import tech.fitcom.app.database.FitComDatabase
import tech.fitcom.app.database.dao.FitnessCenterMemberDao
import tech.fitcom.app.database.entity.ApplicationSettings
import tech.fitcom.app.database.entity.FitnessCenterMember
import tech.fitcom.app.database.repository.ApplicationSettingsRepositoryImpl
import tech.fitcom.app.home.HomeActivity
import tech.fitcom.app.registration.WelcomeActivity


class MainActivity : AppCompatActivity() {

    private var job = Job()
    private val uiScope = CoroutineScope(Dispatchers.Main + job)
    private var fitnessCenterMember = MutableLiveData<FitnessCenterMember>()
    private var applicationSettings = MutableLiveData<ApplicationSettings>()
    private val applicationSettingsRepository = ApplicationSettingsRepositoryImpl(applicationContext)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val fitnessCenterMemberDao = FitComDatabase.getInstance(applicationContext).fitnessCenterMemberDao


        //hides the action bar in the loading screen
        supportActionBar?.hide()

        //local database calls
        existFitnessCenterMember(fitnessCenterMemberDao)
        getApplicationSettings("1")

        //check if application settings are existing
        if(applicationSettings.value == null) {
            initializeApplicationSettings(ApplicationSettings("1",null,null,null))
        }

        //sets a timer for 3 seconds to show the logo in that time
        Handler(Looper.getMainLooper()).postDelayed({
//            Toast.makeText(applicationContext, fitnessCenterMember.value?.firstName, Toast.LENGTH_SHORT).show()
            //constant for manual start HomeActivity or LoginActivity
            if(fitnessCenterMember.value != null) {
                val intent = Intent(this@MainActivity, HomeActivity::class.java)
                startActivity(intent)
            }
            else {
                val intent = Intent(this@MainActivity, WelcomeActivity::class.java)
                startActivity(intent)
            }
            finish()
        }, 2000)
    }

    private fun existFitnessCenterMember(fitnessCenterMemberDao: FitnessCenterMemberDao) {
        uiScope.launch {
            //dropTable(fitnessCenterMemberDao)
            fitnessCenterMember.value = getFitnessCenterMember(fitnessCenterMemberDao)
        }
    }

    private fun initializeApplicationSettings(applicationSettings: ApplicationSettings) {
        uiScope.launch {
            applicationSettingsRepository.initializeApplicationSettings(applicationSettings)
        }
    }

    private fun getApplicationSettings(id: String) {
        uiScope.launch {
            applicationSettings.value = applicationSettingsRepository.getApplicationSettings(id)
        }
    }

    private suspend fun getFitnessCenterMember(fitnessCenterMemberDao: FitnessCenterMemberDao): FitnessCenterMember {
        return withContext(Dispatchers.IO) {
            var fitnessCenterMember = fitnessCenterMemberDao.get("1")
            fitnessCenterMember
        }
    }

    //only for development purpose
    private suspend fun dropTable(fitnessCenterMemberDao: FitnessCenterMemberDao) {
        return withContext(Dispatchers.IO) {
            fitnessCenterMemberDao.deleteFitnessCenterTable()
        }
    }
}