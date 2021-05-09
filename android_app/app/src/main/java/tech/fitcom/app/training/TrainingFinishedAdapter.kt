package tech.fitcom.app.training

import android.content.Context
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.home.TrainingdayFragment

class TrainingFinishedAdapter(private val context: Context, private val exercises: List<HistoryData>) :
    RecyclerView.Adapter<TrainingFinishedAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView?.findViewById<TextView?>(R.id.text_overview_title)
        val textWeight = itemView?.findViewById<TextView?>(R.id.text_overview_weight)
        val textRep = itemView?.findViewById<TextView?>(R.id.text_overview_rep)

        init {
            itemView.setOnClickListener {
                var activity = itemView.context as AppCompatActivity
                var fragment = TrainingdayFragment()
                // use a bundle to give the next fragment the information which rv was clicked
                var bundle = Bundle()
                bundle.putString("Workout_Title", textTitle?.text.toString())
                fragment.arguments = bundle
                //replace the fragment
                activity.supportFragmentManager.beginTransaction().replace(R.id.fragment, fragment).commit()
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.trainingplan_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return exercises.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val exercise = exercises[position]
        holder.textTitle?.text = exercise.title
        holder.textWeight?.text = exercise.value1.toString() + exercise.value1type
        holder.textRep?.text = exercise.value2.toString() + exercise.value2type
    }
}