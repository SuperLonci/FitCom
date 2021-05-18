package tech.fitcom.app.database.dao

import androidx.room.*
import tech.fitcom.app.database.entity.ExecutedTrainingsPlanDays

@Dao
interface ExecutedTrainingsPlanDaysDao {
    @Insert
    fun insertExecutedTrainingsPlanDay(executedTrainingsPlanDays: ExecutedTrainingsPlanDays)

    @Update
    fun updateExecutedTrainingsPlanDay(executedTrainingsPlanDays: ExecutedTrainingsPlanDays)

    @Delete
    fun deleteExecutedTrainingsPlanDay(executedTrainingsPlanDays: ExecutedTrainingsPlanDays)

    @Query("SELECT * FROM executed_trainings_plan_days WHERE id = :id")
    fun get(id: String): ExecutedTrainingsPlanDays
}
