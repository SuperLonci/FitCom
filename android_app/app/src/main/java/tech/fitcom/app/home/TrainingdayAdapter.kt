package tech.fitcom.app.home

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.training.TrainingActivity

class TrainingdayAdapter(private val context: Context, private val trainingdays: List<TrainingdayInfo>) :
    RecyclerView.Adapter<TrainingdayAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView?.findViewById<TextView?>(R.id.text_trainingday_title)
        val textDesc = itemView?.findViewById<TextView?>(R.id.text_trainingday_desc)
        val textLast = itemView?.findViewById<TextView?>(R.id.text_trainingday_last)

        init {
            itemView.setOnClickListener {
                val intent = Intent(context, TrainingActivity::class.java)
                intent.putExtra("Workout_Title", textTitle?.text.toString())
                context.startActivity(intent)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.trainingday_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return trainingdays.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val trainingday= trainingdays[position]
        holder.textTitle?.text = trainingday.title
        holder.textDesc?.text = trainingday.desc
        holder.textLast?.text = trainingday.last
    }
}