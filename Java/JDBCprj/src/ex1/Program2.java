package ex1;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Date;



public class Program2 {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		String title = "제목2입니디";
		String writerId = "상일이2";
		String content = "이것은 내용";
		String files = "File path";
		
		String url = "jdbc:oracle:thin:@localhost:1521/xe";
		String sql = "INSERT INTO notice (" + 
				"    title," + 
				"    writer_id," + 
				"    content," + 
				"    files" + 
				") VALUES (?, ?, ?, ?)";
		
		Class.forName("oracle.jdbc.driver.OracleDriver");
		Connection con = DriverManager.getConnection(url, "study", "study");
		PreparedStatement pst = con.prepareStatement(sql);
		
		pst.setString(1, title);
		pst.setString(2, writerId);
		pst.setString(3, content);
		pst.setString(4, files);
		
		int result = pst.executeUpdate();
		System.out.println(result);
		
		pst.close();
		con.close();
		
	}
}
