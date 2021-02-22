package tech.fitcom.app.home

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.trainingplan_item.view.*
import tech.fitcom.app.R

class TrainingplanAdapter(val arrayList: ArrayList<Trainingplan_item>, val context: Context) :
    RecyclerView.Adapter<TrainingplanAdapter.ViewHolder>() {

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){

        fun bindItems(model: Trainingplan_item){

            itemView.text_trainingplan_title.text = model.title
            itemView.text_trainingplan_subinfo.text = model.desc
            itemView.text_trainingplan_subsubinfo.text = model.subdesc

        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val v = LayoutInflater.from(parent.context).inflate(R.layout.trainingplan_item, parent, false)

        return ViewHolder(v)
    }

    override fun getItemCount(): Int {
        return arrayList.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.bindItems(arrayList[position])
    }
}