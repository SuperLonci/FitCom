package tech.fitcom.app.home

import android.content.Context
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R

class TrainingdayAdapter(private val context: Context, private val trainingdays: List<TrainingdayInfo>) :
    RecyclerView.Adapter<TrainingdayAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView?.findViewById<TextView?>(R.id.text_trainingplan_title)
        val textDesc = itemView?.findViewById<TextView?>(R.id.text_trainingplan_desc)
        val textInfo = itemView?.findViewById<TextView?>(R.id.text_trainingplan_info)

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
        return trainingdays.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val trainingday= trainingdays[position]
        holder.textTitle?.text = trainingday.title
        holder.textDesc?.text = trainingday.desc
        holder.textInfo?.text = trainingday.info
    }
}