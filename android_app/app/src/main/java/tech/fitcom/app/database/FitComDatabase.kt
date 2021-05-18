package tech.fitcom.app.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import tech.fitcom.app.database.dao.FitnessCenterMemberDao
import tech.fitcom.app.database.entity.*

@Database(entities = [FitnessCenterMember::class, TrainingsPlans::class,
    TrainingsPlanDays::class, TrainingsPlanDayExercises::class,
    TrainingsPlanDayExercisesSets::class, MuscleGroups::class,
    Exercises::class, ExerciseMuscleGroups::class,
    ExecutedTrainingsPlanDays::class], version = 2, exportSchema = false)

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
                        "fitcom_database"
                    )
                        .fallbackToDestructiveMigration()
                        .build()
                }
                return instance
            }
        }
    }
}