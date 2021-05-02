package tech.fitcom.app.database

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class TrainingsPlan(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "fitness_center_member_id")
    var fitnessCenterMemberId: String,

    @ColumnInfo(name = "trainer_id")
    var trainerId: String,

    @ColumnInfo(name = "title")
    var title: String
)