package tech.fitcom.app.database.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import androidx.room.Update
import tech.fitcom.app.database.entity.ExerciseMuscleGroups

@Dao
interface ExerciseMuscleGroupsDao {
    @Insert
    fun insertExerciseMuscleGroup(exerciseMuscleGroups: ExerciseMuscleGroups)

    @Update
    fun updateExerciseMuscleGroup(exerciseMuscleGroups: ExerciseMuscleGroups)

    @Query("DELETE FROM exercise_muscle_group WHERE id = :id")
    fun deleteExerciseMuscleGroup(id: String)

    @Query("SELECT * FROM exercise_muscle_group WHERE id = :id")
    fun getExerciseMuscleGroup(id: String): ExerciseMuscleGroups

}
