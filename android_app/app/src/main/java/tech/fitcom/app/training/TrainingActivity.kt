package tech.fitcom.app.training

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.activity.viewModels
import androidx.lifecycle.Observer
import tech.fitcom.app.R

class TrainingActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_training)

        //this variable contains a string of the item title which is clicked in the rv
        val extras:String = intent.getStringExtra("Workout_Title").toString()

        Toast.makeText(this, extras, Toast.LENGTH_SHORT).show()
    }
}