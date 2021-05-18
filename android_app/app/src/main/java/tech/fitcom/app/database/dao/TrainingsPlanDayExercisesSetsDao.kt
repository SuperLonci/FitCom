package tech.fitcom.app.database.dao

import androidx.room.*
import tech.fitcom.app.database.entity.TrainingsPlanDayExercises
import tech.fitcom.app.database.entity.TrainingsPlanDayExercisesSets

@Dao
interface TrainingsPlanDayExercisesSetsDao {
    @Insert
    fun insertTrainingsPlanDayExercisesSet(trainingsPlanDayExercise: TrainingsPlanDayExercisesSets)

    @Update
    fun updateTrainingsPlanDayExerciseSet(trainingsPlanDayExercise: TrainingsPlanDayExercisesSets)

    @Delete
    fun deleteTrainingsPlanDayExerciseSet(trainingsPlanDayExercise: TrainingsPlanDayExercisesSets)

    @Query("SELECT * FROM trainings_plan_day_exercises_sets WHERE id = :id")
    fun getTrainingsPlanDayExerciseSet(id: String): TrainingsPlanDayExercisesSets
}