package tech.fitcom.app.database.dao

import androidx.room.*
import tech.fitcom.app.database.entity.TrainingsPlans

@Dao
interface TrainingsPlanDao {

    @Insert
    fun insertTrainingsPlan(trainingsPlan: TrainingsPlans)

    @Update
    fun updateTrainingsPlan(trainingsPlan: TrainingsPlans)

    @Delete
    fun deleteTrainingsPlan(trainingsPlan: TrainingsPlans)

    @Query("SELECT * FROM trainings_plans WHERE id = :id")
    fun getTrainingsPlan(id: String): TrainingsPlans
}