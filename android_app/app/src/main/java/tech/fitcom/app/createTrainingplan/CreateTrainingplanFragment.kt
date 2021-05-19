package tech.fitcom.app.createTrainingplan

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.SearchView
import androidx.fragment.app.Fragment
import androidx.navigation.Navigation
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.DataManager
import tech.fitcom.app.R

class CreateTrainingplanFragment : Fragment() {
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val root = inflater.inflate(R.layout.fragment_create_trainingplan, container, false)

        // Button Navigation
        val next = root.findViewById<Button>(R.id.btn_create_trainingplan_next)
        next.setOnClickListener {
            Navigation.findNavController(root).navigate(R.id.CreateTrainingplan_details)
        }

        // Data Manager for TrainingPlanList
        val rv = root.findViewById<RecyclerView>(R.id.rv_create_trainingsplan_select)

        val adapter = CreateTrainingplanSearchAdapter(requireContext(), DataManager().exercises)

        rv.adapter =  adapter

        rv.layoutManager = LinearLayoutManager(context)

        // Search Bar
        val search_create_trainingplan = root.findViewById<SearchView>(R.id.search_create_trainingplan)

        search_create_trainingplan.setOnQueryTextListener(object: SearchView.OnQueryTextListener{
            override fun onQueryTextSubmit(query: String?): Boolean {
                return false
            }

            override fun onQueryTextChange(newText: String?): Boolean {
                adapter.filter.filter(newText)
                return false
            }

        })

        return root
    }
}
