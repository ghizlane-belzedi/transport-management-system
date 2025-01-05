package org.sop.ticket_service.service;

import org.sop.ticket_service.dto.TicketDTO;
import org.sop.ticket_service.model.Ticket;
import org.sop.ticket_service.repository.TicketRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;
    private final RestTemplate restTemplate;

    public TicketService(TicketRepository ticketRepository, RestTemplate restTemplate) {

        this.ticketRepository = ticketRepository;
        this.restTemplate = restTemplate;

    }

    public TicketDTO createTicket(TicketDTO ticketDTO) {
        Ticket ticket = new Ticket();
        ticket.setUserId(ticketDTO.getUserId());
        ticket.setTrajetId(ticketDTO.getTrajetId());
        ticket.setDateTicket(ticketDTO.getDateTicket());
        ticket.setMontant(ticketDTO.getMontant());

        Ticket savedTicket = ticketRepository.save(ticket);
        return mapToDTO(savedTicket);
    }

    public TicketDTO getTicketById(String id) {
        Ticket ticket = ticketRepository.findById(id).orElseThrow(() -> new RuntimeException("Ticket not found"));
        return mapToDTO(ticket);
    }

    public List<TicketDTO> getAllTickets() {
        List<Ticket> tickets = ticketRepository.findAll();
        return tickets.stream().map(this::mapToDTO).collect(Collectors.toList());
    }

    public void deleteTicket(String id) {
        ticketRepository.deleteById(id);
    }

    private TicketDTO mapToDTO(Ticket ticket) {
        TicketDTO ticketDTO = new TicketDTO();
        ticketDTO.setId(ticket.getId());
        ticketDTO.setUserId(ticket.getUserId());
        ticketDTO.setTrajetId(ticket.getTrajetId());
        ticketDTO.setDateTicket(ticket.getDateTicket());
        ticketDTO.setMontant(ticket.getMontant());
        return ticketDTO;
    }
}
