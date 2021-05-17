package tech.fitcom.app.home

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import androidx.navigation.fragment.NavHostFragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import tech.fitcom.app.DataManager
import tech.fitcom.app.EnvironmentVariables
import tech.fitcom.app.R
import tech.fitcom.app.createTrainingplan.CreateTrainingplanActivity

class TrainingdayFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val root = inflater.inflate(R.layout.fragment_trainingday, container, false)
//        var tv_workout_title = root.findViewById<TextView>(R.id.tv_workout_title)
//        var startWorkout = root.findViewById<Button>(R.id.startWorkout)
//
//        //get the information which rv was clicked
//        var bundle = this.arguments
//        tv_workout_title.text = "Du hast das " + bundle?.getString("Workout_Title") + " Workout ausgewählt"
//        startWorkout.setOnClickListener {
//            //TODO("add the intent to open a new activity")
//        }
//        // Inflate the layout for this fragment

        // Recycler View definition

        // Data Manager for TrainingPlanList
        val rv = root.findViewById<RecyclerView>(R.id.listTrainingDays)

        rv.adapter = TrainingdayAdapter(requireContext(), DataManager().trainingdays.values.toList())

        rv.layoutManager = LinearLayoutManager(context)

        // Button select Trainingplan
        val btn_change_trainingplan = root.findViewById<FloatingActionButton>(R.id.btn_change_trainingplan)

        btn_change_trainingplan.setOnClickListener {
            activity?.supportFragmentManager?.beginTransaction()?.replace(R.id.fragment, TrainingplanFragment())?.commit()
        }

        return root
    }
}