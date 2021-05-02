package tech.fitcom.app

import android.content.Context
import androidx.room.Room
import org.junit.After
import org.junit.Assert
import org.junit.Before
import org.junit.Test
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.core.app.ApplicationProvider
import org.junit.runner.RunWith
import tech.fitcom.app.database.FitComDatabase
import tech.fitcom.app.database.FitComDatabaseDao
import tech.fitcom.app.database.TrainingsPlan
import java.io.IOException


@RunWith(AndroidJUnit4::class)
class DatabaseUnitTest {

    private lateinit var fitComDao: FitComDatabaseDao
    private lateinit var db: FitComDatabase

    @Before
    fun createDb() {
        val context = ApplicationProvider.getApplicationContext<Context>()
        // Using an in-memory database because the information stored here disappears when the
        // process is killed.
        db = Room.inMemoryDatabaseBuilder(context, FitComDatabase::class.java)
            // Allowing main thread queries, just for testing.
            .allowMainThreadQueries()
            .build()
        fitComDao = db.fitComDatabaseDao
    }

    @After
    @Throws(IOException::class)
    fun closeDb() {
        db.close()
    }

    @Test
    @Throws(Exception::class)
    fun insertAndGetTrainingsPlan() {
        val trainingsPlan = TrainingsPlan("1","1234567890","2345678901","3-Split")
        fitComDao.insertTrainingsPlan(trainingsPlan)
        val firstTrainingsPlan = fitComDao.get("1")
        Assert.assertEquals(firstTrainingsPlan.id, trainingsPlan.id)
    }

    @Test
    @Throws(Exception::class)
    fun updateTrainingsPlan() {
        val trainingsPlan = TrainingsPlan("1","1234567890","2345678901","3-Split")
        fitComDao.insertTrainingsPlan(trainingsPlan)
        val updatedTrainingsPlan = TrainingsPlan("1", "1234567890","9876543210","5-Split")
        fitComDao.updateTrainingsPlan(updatedTrainingsPlan)
        Assert.assertEquals(trainingsPlan, updatedTrainingsPlan)
    }
}