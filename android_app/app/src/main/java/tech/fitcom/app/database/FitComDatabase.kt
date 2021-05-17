package tech.fitcom.app.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import tech.fitcom.app.database.dao.FitnessCenterMemberDao
import tech.fitcom.app.database.entity.FitnessCenterMember
import tech.fitcom.app.database.entity.TrainingsPlans

@Database(entities = [FitnessCenterMember::class, TrainingsPlans::class], version = 1, exportSchema = false)
@TypeConverters(Converters::class)
abstract class FitComDatabase : RoomDatabase() {

    abstract val fitComDatabaseDao: FitComDatabaseDao
    abstract val fitnessCenterMemberDao: FitnessCenterMemberDao

    companion object{

        @Volatile
        private var INSTANCE: FitComDatabase? = null

        fun getInstance(context: Context) : FitComDatabase {
            synchronized(this) {
                var instance = INSTANCE

                if (instance == null) {
                    instance = Room.databaseBuilder(
                        context.applicationContext,
                        FitComDatabase::class.java,
                        "sleep_history_database"
                    )
                        .fallbackToDestructiveMigration()
                        .build()
                }
                return instance
            }
        }
    }
}