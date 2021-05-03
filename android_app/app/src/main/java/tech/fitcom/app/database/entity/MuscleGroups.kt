package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "muscle_groups")
data class MuscleGroups(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "title")
    var title: String
)