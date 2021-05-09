package tech.fitcom.app.training

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.isVisible
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import java.time.Instant

class TrainingInputHistoryAdapter(private val context: Context, private val exercises: List<HistoryData>) :
    RecyclerView.Adapter<TrainingInputHistoryAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val textTitle = itemView.findViewById<TextView?>(R.id.text_history_title)
        val textValue1 = itemView.findViewById<TextView?>(R.id.text_history_weight)
        val textValue2 = itemView.findViewById<TextView?>(R.id.text_history_rep)
        val textLast = itemView.findViewById<TextView>(R.id.text_history_last)

        init {
            itemView.setOnClickListener {
                var activity = itemView.context as AppCompatActivity
                var fragment = TrainingDayOverviewFragment()
                Toast.makeText(context,"Warum klickst du mich?", Toast.LENGTH_SHORT).show()
            }
        }
    }

    fun update(){
        notifyDataSetChanged()
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
        holder.textValue1?.text = item.value1.toString().plus(" ").plus(item.value1type)
        if (item.value2 == null) {
            holder.textValue2?.isVisible = false
        } else {
            holder.textValue2?.text = item.value2.toString().plus(" ").plus(item.value2type)
        }
        holder.textLast?.text = item.date
    }
}