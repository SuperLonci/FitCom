package tech.fitcom.app.home

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.lifecycle.MutableLiveData
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import com.google.android.material.bottomnavigation.BottomNavigationView
import kotlinx.coroutines.*
import tech.fitcom.app.EnvironmentVariables
import tech.fitcom.app.R
import tech.fitcom.app.database.FitComDatabase
import tech.fitcom.app.database.dao.ApplicationSettingsDao
import tech.fitcom.app.database.dao.FitnessCenterMemberDao
import tech.fitcom.app.database.entity.ApplicationSettings
import tech.fitcom.app.database.entity.FitnessCenterMember
import tech.fitcom.app.database.repository.ApplicationSettingsRepositoryImpl

class HomeActivity : AppCompatActivity() {

    private var job = Job()
    private val uiScope = CoroutineScope(Dispatchers.Main + job)
    private var applicationSettings = MutableLiveData<ApplicationSettings>()
    private val applicationSettingsRepository = ApplicationSettingsRepositoryImpl(applicationContext)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_home)
        supportActionBar?.title = getString(R.string.string_training_plans)

        // Database connection
        getApplicationSettings("1")

        val bottomNavigationView = findViewById<BottomNavigationView>(R.id.bottom_navigation)
        val navHostFragment = supportFragmentManager.findFragmentById(R.id.fragment) as NavHostFragment
        val navController = navHostFragment.navController

        //switch the title in the appBar for each fragment
        val appBarConfig = AppBarConfiguration(setOf(R.id.homeFragement,R.id.trainingFragment,R.id.profileFragment))
        setupActionBarWithNavController(navController, appBarConfig)

        bottomNavigationView.setupWithNavController(navController)

        bottomNavigationView.setOnNavigationItemSelectedListener { item ->
            when(item.itemId) {
                R.id.homeFragement -> {
                    supportFragmentManager.beginTransaction().replace(R.id.fragment, FeedFragment()).commit()
                    true
                }
                R.id.trainingFragment -> {
                    if (applicationSettings.value?.selectedTrainingPlan == null) {
                        supportFragmentManager.beginTransaction().replace(R.id.fragment, TrainingplanFragment()).commit()
                    } else {
                        supportFragmentManager.beginTransaction().replace(R.id.fragment, TrainingdayFragment()).commit()
                    }
                    true
                }
                R.id.profileFragment -> {
                    supportFragmentManager.beginTransaction().replace(R.id.fragment, ProfileFragment()).commit()
                    true
                }
                else -> false

            }
        }
    }

    private fun getApplicationSettings(id: String) {
        uiScope.launch {
            applicationSettings.value = applicationSettingsRepository.getApplicationSettings(id)
        }
    }

    override fun onResume() {
        super.onResume()
    }

}
