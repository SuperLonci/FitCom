package tech.fitcom.app.database

import androidx.room.*

@Dao
interface FitComDatabaseDao {

    @Insert
    fun insert(fitnessCenterMember: FitnessCenterMember)

    @Update
    fun update(fitnessCenterMember: FitnessCenterMember)

    @Delete
    fun delete(fitnessCenterMember: FitnessCenterMember)

    @Query("SELECT * FROM fitness_center_member WHERE id = :id")
    fun get(id: String): FitnessCenterMember
}