package tech.fitcom.app.database.dao

import androidx.room.*
import tech.fitcom.app.database.entity.Exercises
import tech.fitcom.app.database.entity.FitnessCenterMember
import tech.fitcom.app.database.entity.MuscleGroups

@Dao
interface MuscleGroupsDao {
    @Insert
    fun insertMuscleGroup(muscleGroup: MuscleGroups)

    @Update
    fun updateMuscleGroup(muscleGroup: MuscleGroups)

    @Query("DELETE FROM muscle_groups WHERE id = :id")
    fun deleteMuscleGroup(id: String)

    @Query("SELECT * FROM muscle_groups WHERE id = :id")
    fun getMuscleGroup(id: String)
}
