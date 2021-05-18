package tech.fitcom.app.home

import android.content.Context
import android.content.Intent
import android.content.res.Resources
import android.graphics.drawable.Drawable
import android.os.Build
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import tech.fitcom.app.R
import tech.fitcom.app.training.TrainingActivity

class TrophyAdapter(private val context: Context, private val items: List<TrophyItemData>) :
    RecyclerView.Adapter<TrophyAdapter.ViewHolder>() {

    private val layoutInflater = LayoutInflater.from(context)

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val imgTrophy = itemView?.findViewById<ImageView?>(R.id.iv_trophy_img)
        val textTitle = itemView?.findViewById<TextView?>(R.id.text_trophy_title)

        init {
            itemView.setOnClickListener {
                Toast.makeText(itemView.getContext(), "Füge ein was notwendig ist" , Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val itemView = layoutInflater.inflate(R.layout.trophy_item, parent, false)
        return ViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return items.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = items[position]
        holder.imgTrophy?.setImageResource(item.image)
        holder.textTitle?.text = item.title
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            holder.textTitle?.tooltipText = item.info
        }
    }
}