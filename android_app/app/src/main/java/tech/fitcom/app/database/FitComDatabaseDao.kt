package tech.fitcom.app.database

import androidx.room.*
import tech.fitcom.app.database.entity.FitnessCenterMember
import tech.fitcom.app.database.entity.TrainingsPlans

@Dao
interface FitComDatabaseDao {

    @Insert
    fun insertFitnessCenterMember(fitnessCenterMember: FitnessCenterMember)

    @Insert
    fun insertTrainingsPlan(trainingsPlan: TrainingsPlans)

    @Update
    fun updateFitnessCenterMember(fitnessCenterMember: FitnessCenterMember)

    @Update
    fun updateTrainingsPlan(trainingsPlan: TrainingsPlans)

    @Delete
    fun delete(fitnessCenterMember: FitnessCenterMember)

    @Query("SELECT * FROM fitness_center_member WHERE id = :id")
    fun get(id: String): FitnessCenterMember
}