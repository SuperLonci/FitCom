package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "application_settings")
data class ApplicationSettings(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "selected_training_plan")
    var selectedTrainingPlan: String?,

    @ColumnInfo(name = "feed_filter")
    var feedFilter: String,

    @ColumnInfo(name = "dark_mode")
    var dark_mode: Boolean
)