package tech.fitcom.app.createTrainingplan

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.DataManager
import tech.fitcom.app.R
import tech.fitcom.app.training.ExerciseOverviewDragAdapter

class CreateTrainingplanDetailsFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_create_trainingplan_details, container, false)

        // Button Navigation
        val next = root.findViewById<Button>(R.id.btn_create_trainingplan_finish)
        next.setOnClickListener {
            activity?.finish()
        }

        // Data Manager for TrainingPlanList
        val rv = root.findViewById<RecyclerView>(R.id.rv_create_trainingsplan_details)

        val adapter = CreateTrainingplanDetailsAdapter(requireContext(), DataManager().exercises)

        rv.adapter =  adapter

        rv.layoutManager = LinearLayoutManager(context)

        // Setup ItemTouchHelper
        val callback = CreateTrainingplanDetailsDragAdapter(requireContext(), adapter, ItemTouchHelper.UP.or(
            ItemTouchHelper.DOWN), ItemTouchHelper.LEFT.or(ItemTouchHelper.RIGHT))
        ItemTouchHelper(callback).attachToRecyclerView(rv)

        return root
    }
}
