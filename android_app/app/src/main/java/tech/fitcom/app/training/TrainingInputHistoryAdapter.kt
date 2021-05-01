package tech.fitcom.app.training

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R

class TrainingInputHistoryAdapter(private val context: Context, private val exercises: List<HistoryData>) :
    RecyclerView.Adapter<TrainingInputHistoryAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView.findViewById<TextView?>(R.id.text_history_title)
        val textWeight = itemView.findViewById<TextView?>(R.id.text_history_weight)
        val textRep = itemView.findViewById<TextView?>(R.id.text_history_rep)
        val textLast = itemView.findViewById<TextView>(R.id.text_history_last)

        init {
            itemView.setOnClickListener {
                var activity = itemView.context as AppCompatActivity
                var fragment = TrainingDayOverviewFragment()
                Toast.makeText(context,"Warum klickst du mich?", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.history_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return exercises.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = exercises[position]
        holder.textTitle?.text = item.title
        holder.textWeight?.text = item.weight
        holder.textRep?.text = item.rep
        holder.textLast?.text = item.last
    }
}