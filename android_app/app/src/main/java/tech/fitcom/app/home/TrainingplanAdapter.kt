package tech.fitcom.app.home

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.trainingplan_item.view.*
import tech.fitcom.app.R

class TrainingplanAdapter(private val context: Context, private val trainingplans: List<TrainingplanInfo>) :
    RecyclerView.Adapter<TrainingplanAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView?.findViewById<TextView?>(R.id.text_trainingplan_title)
        val textDesc = itemView?.findViewById<TextView?>(R.id.text_trainingplan_desc)
        val textInfo = itemView?.findViewById<TextView?>(R.id.text_trainingplan_info)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.trainingplan_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return trainingplans.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val trainingplan = trainingplans[position]
        holder.textTitle?.text = trainingplan.title
        holder.textDesc?.text = trainingplan.desc
        holder.textInfo?.text = trainingplan.info
    }
}