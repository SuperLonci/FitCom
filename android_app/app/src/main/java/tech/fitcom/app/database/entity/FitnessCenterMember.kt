package tech.fitcom.app.database.entity

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.sql.Date

@Entity(tableName = "fitness_center_member")
data class FitnessCenterMember(
    @PrimaryKey(autoGenerate = false)
    var id: String,

    @ColumnInfo(name = "gender")
    var gender: String,

    @ColumnInfo(name = "first_name")
    var firstName: String,

    @ColumnInfo(name = "last_name")
    var lastName: String?,

    @ColumnInfo(name = "birth_date")
    var birthDate: Date?,

    @ColumnInfo(name = "email")
    var email: String?,

    @ColumnInfo(name = "activation_token")
    var activationToken: String?,

    @ColumnInfo(name = "body_weight")
    var bodyWeight: Int,

    @ColumnInfo(name = "body_height")
    var bodyHeight: Int
    )
