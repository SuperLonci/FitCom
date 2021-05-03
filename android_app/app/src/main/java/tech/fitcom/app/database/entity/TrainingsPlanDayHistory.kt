package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.sql.Date

@Entity(tableName = "trainings_plan_day_history")
class TrainingsPlanDayHistory(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "trainings_plan_day_id")
    var trainingsPlanDayId: String,

    @ColumnInfo(name = "fitness_center_member_id")
    var fitnessCenterMemberId: String,

    @ColumnInfo(name = "date")
    var date: Date,

    @ColumnInfo(name = "start_time")
    var startTime: Int,

    @ColumnInfo(name = "end_time")
    var endTime: Int
)