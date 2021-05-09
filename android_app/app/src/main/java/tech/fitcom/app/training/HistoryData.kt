package tech.fitcom.app.training

class HistoryData (val title: String, val value1: Int, val value1type: String, val value2: Int?, val value2type: String?, val date: String) {
    override fun toString(): String {
        return title
    }
}