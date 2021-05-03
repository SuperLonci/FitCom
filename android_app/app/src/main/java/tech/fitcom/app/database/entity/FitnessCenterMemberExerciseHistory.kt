package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.RewriteQueriesToDropUnusedColumns
import java.sql.Date

@Entity(tableName = "fitness_center_member_exercise_history", primaryKeys = ["member_id", "exercise_id", "date"])
data class FitnessCenterMemberExerciseHistory(
    @ColumnInfo(name = "member_id")
    var memberId: String,

    @ColumnInfo(name = "exercise_id")
    var exerciseId: String,

    @ColumnInfo(name = "date")
    var date: Date,

    @ColumnInfo(name = "trainings_plan_day_history_id")
    var trainingsPlanDayHistoryId: String,

    @ColumnInfo(name = "repetitions")
    var repetitions: Int,

    @ColumnInfo(name = "sets")
    var sets: Int,

    @ColumnInfo(name = "weight")
    var weight: Int
)