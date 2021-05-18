package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "trainings_plans")
data class TrainingsPlans(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "creator_id")
    var creatorId: String,

    @ColumnInfo(name = "trainer_id")
    var trainerId: String,

    @ColumnInfo(name = "title")
    var title: String
)