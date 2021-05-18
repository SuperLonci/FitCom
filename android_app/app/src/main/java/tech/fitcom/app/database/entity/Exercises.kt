package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "exercises")
data class Exercises(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    //there are different types like upper body or legs
    @ColumnInfo(name = "type")
    var type: String,

    @ColumnInfo(name = "requires_equipment")
    var requiresEquipment: Boolean,

    @ColumnInfo(name = "requires_trainings_partner")
    var requiresTrainingsPartner: Boolean,

    @ColumnInfo(name = "title")
    var title: String,

    @ColumnInfo(name = "description")
    var description: String
)