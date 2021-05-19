package tech.fitcom.app.home

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.DataManager
import tech.fitcom.app.R

class FeedFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_home, container, false)

        // Recycler View definition

        // Data Manager for TrainingPlanList
        val rvHome = root.findViewById<RecyclerView>(R.id.recyclerView_Home)

        val itemAdapter = FeedAdapter(requireContext(), DataManager().homeItems.values.toMutableList())
        rvHome.adapter = itemAdapter

        rvHome.layoutManager = LinearLayoutManager(context)

        // Setup ItemTouchHelper
        val callback = FeedDragAdapter(requireContext(), itemAdapter, ItemTouchHelper.UP.or(ItemTouchHelper.DOWN), ItemTouchHelper.LEFT.or(ItemTouchHelper.RIGHT))
        ItemTouchHelper(callback).attachToRecyclerView(rvHome)

        return root
    }
}