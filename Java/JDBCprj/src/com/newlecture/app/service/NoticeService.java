package com.newlecture.app.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.newlecture.app.entity.Notice;

public class NoticeService {
	
	private String url = "jdbc:oracle:thin:@localhost:1521/xe";
	private String uid = "study";
	private String pwd = "study";
	private String driver = "oracle.jdbc.driver.OracleDriver";
	public List<Notice> getList(int page, String field, String query) throws ClassNotFoundException, SQLException{
		int start = 1 + (page-1)*10; // 1씩 증가함 등차수열
		int end = page*10; // start랑 같음
		String sql = "SELECT * FROM NOTICE_VIEW WHERE " + field + " LIKE ?  AND NUM BETWEEN ? AND ?";
		
		Class.forName(driver);
		Connection con = DriverManager.getConnection(url, uid, pwd);
		PreparedStatement pst = con.prepareStatement(sql);
		
		pst.setString(1, "%" + query + "%");
		pst.setInt(2, start);
		pst.setInt(3, end);
		
		ResultSet rs = pst.executeQuery();
		
		List<Notice> list = new ArrayList<Notice>();
		
		while(rs.next()) {
			int id = rs.getInt("ID");
			String title = rs.getString("TITLE");
			String writerId = rs.getString("WRITER_ID");
			Date regDate = rs.getDate("REGDATE");
			String content = rs.getString("CONTENT");
			int hit = rs.getInt("hit");
			String files = rs.getString("files");
			
			Notice notice = new Notice(id, title, writerId, regDate, content, hit, files);
			// if (hit >= 10) // 사용하면 안됨!
			// Oracle에서 데이터 가공을 하고, Java 에서는 UI관련 작업만 하도록 한다.
			// Select * from Notice Where hit >= 10;
			list.add(notice);
		}
		rs.close();
		pst.close();
		con.close();
		return list;
	}
	
	// SCALAR
	public int getCount( String field, String query) throws ClassNotFoundException, SQLException {
		int count = 0;
		
		String sql = "SELECT COUNT(ID) COUNT FROM NOTICE_VIEW WHERE " + field + " LIKE ?";
		
		Class.forName(driver);
		Connection con = DriverManager.getConnection(url, uid, pwd);
		PreparedStatement pst = con.prepareStatement(sql);
		
		pst.setString(1, "%" + query + "%");
		
		ResultSet rs = pst.executeQuery();
		
		
		if(rs.next()) {
			count = rs.getInt("COUNT");
		}
		
		rs.close();
		pst.close();
		con.close();
		
		return count;
	}
	
	public int insert(Notice notice) throws ClassNotFoundException, SQLException {
		String title = notice.getTitle();
		String writerId = notice.getWriterId();
		String content = notice.getContent();
		String files = notice.getFiles();
		
		String sql = "INSERT INTO notice (" + 
				"    title," + 
				"    writer_id," + 
				"    content," + 
				"    files" + 
				") VALUES (?, ?, ?, ?)";
		
		Class.forName(driver);
		Connection con = DriverManager.getConnection(url, uid, pwd);
		PreparedStatement pst = con.prepareStatement(sql);
		
		pst.setString(1, title);
		pst.setString(2, writerId);
		pst.setString(3, content);
		pst.setString(4, files);
		
		int result = pst.executeUpdate();
		System.out.println(result);
		
		pst.close();
		con.close();
		return result;
	}
	
	public int update(Notice notice) throws ClassNotFoundException, SQLException {
		String title = notice.getTitle();
		String content = notice.getContent();
		String files = notice.getFiles();
		int id = notice.getId();
		
		String sql = "UPDATE NOTICE " + 
				"SET" + 
				"    TITLE=?," + 
				"    CONTENT=?," + 
				"    FILES=?" + 
				"WHERE ID=?";
		
		Class.forName(driver);
		Connection con = DriverManager.getConnection(url, uid, pwd);
		PreparedStatement pst = con.prepareStatement(sql);
		
		pst.setString(1, title);
		pst.setString(2, content);
		pst.setString(3, files);
		pst.setInt(4, id);
		
		int result = pst.executeUpdate();
		System.out.println(result);
		
		pst.close();
		con.close();
		
		return result;
	}
	
	public int delete(int id)  throws ClassNotFoundException, SQLException  {
		
		String sql = "DELETE NOTICE WHERE ID=?";
		
		Class.forName(driver);
		Connection con = DriverManager.getConnection(url, uid, pwd);
		PreparedStatement pst = con.prepareStatement(sql);
		
		pst.setInt(1, id);
		
		int result = pst.executeUpdate();
		System.out.println(result);
		
		pst.close();
		con.close();
		return result;
	}

}
