package tech.fitcom.app.database.dao

import androidx.room.*
import tech.fitcom.app.database.entity.FitnessCenterMember

@Dao
interface FitnessCenterMemberDao {

    @Insert
    fun insertFitnessCenterMember(fitnessCenterMember: FitnessCenterMember)

    @Update
    fun updateFitnessCenterMember(fitnessCenterMember: FitnessCenterMember)

    @Delete
    fun delete(fitnessCenterMember: FitnessCenterMember)

    @Query("SELECT * FROM fitness_center_member WHERE id = :id")
    fun get(id: String): FitnessCenterMember

    @Query("DELETE FROM fitness_center_member")
    fun deleteFitnessCenterTable()
}
