package tech.fitcom.app.database

import androidx.room.*

@Dao
interface FitComDatabaseDao {

    @Insert
    fun insertFitnessCenterMember(fitnessCenterMember: FitnessCenterMember)

    @Insert
    fun insertTrainingsPlan(trainingsPlan: TrainingsPlan)

    @Update
    fun updateFitnessCenterMember(fitnessCenterMember: FitnessCenterMember)

    @Update
    fun updateTrainingsPlan(trainingsPlan: TrainingsPlan)

    @Delete
    fun delete(fitnessCenterMember: FitnessCenterMember)

    @Query("SELECT * FROM fitness_center_member WHERE id = :id")
    fun get(id: String): FitnessCenterMember
}