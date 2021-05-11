package tech.fitcom.app.home

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import tech.fitcom.app.DataManager
import tech.fitcom.app.R
import tech.fitcom.app.training.TrainingActivity

class TrainingplanFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_trainingplan, container, false)

        // Recycler View definition

        // Data Manager for TrainingPlanList
        val rvTrainingplans = root.findViewById<RecyclerView>(R.id.listTrainingPlans)

        val adapter = TrainingplanAdapter(requireContext(), DataManager().trainingplans.values.toList())

        rvTrainingplans.adapter =  adapter

        rvTrainingplans.layoutManager = LinearLayoutManager(context)

        // add set on-click listener
        val btn_add_trainingplan = root.findViewById<FloatingActionButton>(R.id.btn_add_trainingplan)

        btn_add_trainingplan.setOnClickListener {
//            val intent = Intent(context, CreateTrainingPlanActivity::class.java)
//            context.startActivity(intent)
        }

        return root
    }
}