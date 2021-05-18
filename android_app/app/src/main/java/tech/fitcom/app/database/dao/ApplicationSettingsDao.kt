package tech.fitcom.app.database.dao

import androidx.room.*
import tech.fitcom.app.database.entity.ApplicationSettings

@Dao
interface ApplicationSettingsDao {
    @Insert
    fun insertApplicationSettings(applicationSettings: ApplicationSettings)

    @Update
    fun updateApplicationSettings(applicationSettings: ApplicationSettings)

    @Delete
    fun deleteApplicationSettings(applicationSettings: ApplicationSettings)

    @Query("SELECT * FROM application_settings WHERE id = :id")
    fun get(id: String): ApplicationSettings
}