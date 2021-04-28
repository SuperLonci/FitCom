package tech.fitcom.app.home

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.fragment.app.Fragment
import kotlinx.android.synthetic.main.fragment_trainingday.*
import tech.fitcom.app.R

class TrainingDayFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val root = inflater.inflate(R.layout.fragment_trainingday, container, false)
        var tv_workout_title = root.findViewById<TextView>(R.id.tv_workout_title)
        var startWorkout = root.findViewById<Button>(R.id.startWorkout)

        //get the information which rv was clicked
        var bundle = this.arguments
        tv_workout_title.text = "Du hast das " + bundle?.getString("Workout_Title") + " Workout ausgewählt"
        startWorkout.setOnClickListener {
            //TODO("add the intent to open a new activity")
        }
        // Inflate the layout for this fragment
        return root
    }
}