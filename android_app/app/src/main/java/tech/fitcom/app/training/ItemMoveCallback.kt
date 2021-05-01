package tech.fitcom.app.training

import androidx.recyclerview.widget.ItemTouchHelper
import androidx.recyclerview.widget.RecyclerView

private val itemTouchHelperCallback = object: ItemTouchHelper.Callback() {
    override fun getMovementFlags(
        recyclerView: RecyclerView,
        viewHolder: RecyclerView.ViewHolder
    ): Int {
        // Specify the directions of movement
        val dragFlags = ItemTouchHelper.UP or ItemTouchHelper.DOWN
        return makeMovementFlags(dragFlags, 0)
    }

    override fun onMove(
        recyclerView: RecyclerView,
        viewHolder: RecyclerView.ViewHolder,
        target: RecyclerView.ViewHolder
    ): Boolean {
        // Notify your adapter that an item is moved from x position to y position
//        TrainingDayExerciseAdapter.notifyItemMoved(viewHolder.adapterPosition, target.adapterPosition)
        return true
    }

    override fun isLongPressDragEnabled(): Boolean {
        // true: if you want to start dragging on long press
        // false: if you want to handle it yourself
        return true
    }

    override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int) {

    }

    override fun onSelectedChanged(viewHolder: RecyclerView.ViewHolder?, actionState: Int) {
        super.onSelectedChanged(viewHolder, actionState)
        // Handle action state changes
        val swiping = actionState == ItemTouchHelper.ACTION_STATE_DRAG
    }

    override fun clearView(recyclerView: RecyclerView, viewHolder: RecyclerView.ViewHolder) {
        super.clearView(recyclerView, viewHolder)
        // Called by the ItemTouchHelper when the user interaction with an element is over and it also completed its animation
        // This is a good place to send update to your backend about changes
    }
}