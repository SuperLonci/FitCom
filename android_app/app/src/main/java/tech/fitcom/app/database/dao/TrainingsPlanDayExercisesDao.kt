package tech.fitcom.app.database.dao

import androidx.room.*
import tech.fitcom.app.database.entity.TrainingsPlanDayExercises
import tech.fitcom.app.database.entity.TrainingsPlans

@Dao
interface TrainingsPlanDayExercisesDao {
    @Insert
    fun insertTrainingsPlanDayExercise(trainingsPlanDayExercise: TrainingsPlanDayExercises)

    @Update
    fun updateTrainingsPlanDayExercise(trainingsPlanDayExercise: TrainingsPlanDayExercises)

    @Delete
    fun deleteTrainingsPlanDayExercise(trainingsPlanDayExercise: TrainingsPlanDayExercises)

    @Query("SELECT * FROM trainings_plan_day_exercises WHERE id = :id")
    fun getTrainingsPlanDayExercise(id: String): TrainingsPlanDayExercises
}