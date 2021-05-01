package tech.fitcom.app.home

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.DataManager
import tech.fitcom.app.R

class HomeFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_home, container, false)

        // Recycler View definition

        // Data Manager for TrainingPlanList
        val rvHome = root.findViewById<RecyclerView>(R.id.recyclerView_Home)

        rvHome.adapter = HomeAdapter(requireContext(), DataManager().homeItems.values.toList())

        rvHome.layoutManager = LinearLayoutManager(context)


        return root
    }
}