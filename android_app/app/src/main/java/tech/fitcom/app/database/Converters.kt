package tech.fitcom.app.database

import androidx.room.TypeConverter
import java.sql.Date

class Converters {
    //Converts Date to Long object
    @TypeConverter
    fun fromTimestamp(value: Long?): Date? {
        return value?.let { Date(it) }
    }

    //Converts Long to Date object
    @TypeConverter
    fun dateToTimestamp(date: Date?): Long? {
        return date?.time?.toLong()
    }
}