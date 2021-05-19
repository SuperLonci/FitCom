package tech.fitcom.app.database.repository

import android.content.Context
import androidx.lifecycle.MutableLiveData
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.withContext
import tech.fitcom.app.database.FitComDatabase
import tech.fitcom.app.database.entity.ApplicationSettings
import tech.fitcom.app.database.entity.FitnessCenterMember

class ApplicationSettingsRepositoryImpl(applicationContext: Context) {

    private val applicationSettingsDao = FitComDatabase.getInstance(applicationContext).applicationSettingsDao

    suspend fun initializeApplicationSettings(applicationSettings: ApplicationSettings) {
        return withContext(Dispatchers.IO) {
            applicationSettingsDao.insertApplicationSettings(applicationSettings)
        }
    }

    suspend fun getApplicationSettings(id: String): ApplicationSettings {
        return withContext(Dispatchers.IO) {
            applicationSettingsDao.get(id)
        }
    }

    suspend fun updateApplicationSettings(applicationSettings: ApplicationSettings) {
        return withContext(Dispatchers.IO) {
            applicationSettingsDao.insertApplicationSettings(applicationSettings)
        }
    }

    suspend fun deleteApplicationSettings(applicationSettings: ApplicationSettings) {
        return withContext(Dispatchers.IO) {
            applicationSettingsDao.insertApplicationSettings(applicationSettings)
        }
    }
}