package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "trainings_plan_days")
data class TrainingsPlanDays(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "trainings_plan_id")
    var trainingsPlanId: String,

    @ColumnInfo(name = "index")
    var index: Int,

    @ColumnInfo(name = "title")
    var title: String,

    @ColumnInfo(name = "description")
    var description: String
)