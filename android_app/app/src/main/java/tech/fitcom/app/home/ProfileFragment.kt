package tech.fitcom.app.home

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.DataManager
import tech.fitcom.app.R

class ProfileFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_profile, container, false)

        // Data Manager for TrainingPlanList
        val recyclerView = root.findViewById<RecyclerView>(R.id.rv_trophies)

        val adapter = TrophyAdapter(requireContext(), DataManager().trophies.toList())

        recyclerView.adapter = adapter

        recyclerView.layoutManager = GridLayoutManager(context, 4)

        return root
    }
}
