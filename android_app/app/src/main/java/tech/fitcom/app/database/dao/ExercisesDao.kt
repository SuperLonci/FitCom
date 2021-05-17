package tech.fitcom.app.database.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update
import tech.fitcom.app.database.entity.ExerciseMuscleGroups
import tech.fitcom.app.database.entity.Exercises

@Dao
interface ExercisesDao {
    @Insert
    fun insertExercise(exercises: Exercises)

    @Update
    fun updateExercise(exercises: Exercises)

    @Query("DELETE FROM exercises WHERE id = :id")
    fun deleteExercise(id: String)

    @Query("SELECT * FROM exercises WHERE id = :id")
    fun getExercise(id: String)
}
