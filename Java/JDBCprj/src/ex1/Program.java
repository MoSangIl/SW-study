package ex1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;



public class Program {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		String url = "jdbc:oracle:thin:@localhost:1521/xe";
		String sql = "SELECT * FROM NOTICE";
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection con = DriverManager.getConnection(url, "study", "study");
		Statement st = con.createStatement();
		ResultSet rs = st.executeQuery(sql);
		
		while(rs.next()) {
			int id = rs.getInt("ID");
			String title = rs.getString("TITLE");
			String writerId = rs.getString("WRITER_ID");
			Date regDate = rs.getDate("REGDATE");
			String content = rs.getString("CONTENT");
			int hit = rs.getInt("hit");
			
			// if (hit >= 10) // 사용하면 안됨!
			// Oracle에서 데이터 가공을 하고, Java 에서는 UI관련 작업만 하도록 한다.
			// Select * from Notice Where hit >= 10;
			System.out.printf(" id: %d, title: %s, writerId: %s, regDate: %s, content: %s, hit:%d\n", id, title, writerId,regDate , content,hit);
		}
		rs.close();
		st.close();
		con.close();
		
	}
}
