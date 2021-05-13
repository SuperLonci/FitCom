package tech.fitcom.app.createTrainingplan

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.DataManager
import tech.fitcom.app.R
import tech.fitcom.app.home.HomeAdapter
import tech.fitcom.app.home.TrainingplanAdapter


class CreateTrainingplanFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_create_trainingplan, container, false)

        // Data Manager for TrainingPlanList
        val rv = root.findViewById<RecyclerView>(R.id.rv_create_trainingsplan_select)

        val adapter = CreateTrainingplanSearchAdapter(requireContext(), DataManager().exercises.values.toList())

        rv.adapter =  adapter

        rv.layoutManager = LinearLayoutManager(context)

        return root
    }
}
