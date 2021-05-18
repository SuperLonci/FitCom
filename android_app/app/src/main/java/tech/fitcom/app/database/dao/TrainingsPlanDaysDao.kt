package tech.fitcom.app.database.dao

import androidx.room.*
import tech.fitcom.app.database.entity.TrainingsPlanDayExercises
import tech.fitcom.app.database.entity.TrainingsPlanDays

@Dao
interface TrainingsPlanDaysDao {
    @Insert
    fun insertTrainingsPlanDay(trainingsPlanDay: TrainingsPlanDays)

    @Update
    fun updateTrainingsPlanDay(trainingsPlanDay: TrainingsPlanDays)

    @Delete
    fun deleteTrainingsPlanDay(trainingsPlanDay: TrainingsPlanDays)

    @Query("SELECT * FROM trainings_plan_days WHERE id = :id")
    fun getTrainingsPlanDay(id: String): TrainingsPlanDays
}