package tech.fitcom.app.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.DataManager
import tech.fitcom.app.R

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
        return root
    }
}