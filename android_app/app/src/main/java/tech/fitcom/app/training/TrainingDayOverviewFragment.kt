package tech.fitcom.app.training

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.navigation.Navigation
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.DataManager

class TrainingDayOverviewFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_trainingdayoverview, container, false)

        // Button Navigation
        val next = root.findViewById<Button>(R.id.btn_start_training)
        next.setOnClickListener {
            Navigation.findNavController(root).navigate(R.id.TrainingInput)
        }

        val rv = root.findViewById<RecyclerView>(R.id.rv_trainingday_exercises)

        val itemAdapter = TrainingDayExerciseAdapter(requireContext(), DataManager().exercises)
        rv.adapter = itemAdapter

        rv.layoutManager = LinearLayoutManager(context)

        // Setup ItemTouchHelper
        val callback = ExerciseOverviewDragAdapter(requireContext(), itemAdapter, ItemTouchHelper.UP.or(ItemTouchHelper.DOWN), ItemTouchHelper.LEFT.or(ItemTouchHelper.RIGHT))
        ItemTouchHelper(callback).attachToRecyclerView(rv)

        return root
    }
}